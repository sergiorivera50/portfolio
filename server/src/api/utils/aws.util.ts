import aws from 'aws-sdk'
import { logger } from './logger.util'

aws.config.region = 'eu-west-1'

export default class AWSUtils {
  static S3 = new aws.S3()

  static async uploadFileToS3(filename: string, mimetype: string, buffer: Buffer): Promise<String> {
    const bucket = process.env.S3_BUCKET
    await this.S3.upload({
      Bucket: bucket,
      Key: filename,
      ContentType: mimetype,
      Body: buffer,
      ACL: 'public-read'
    }).promise()
    return `https://${bucket}.s3.amazonaws.com/${filename}`
  }

  static async deleteFileFromS3(filename: string) {
    await this.S3.deleteObject({
      Bucket: process.env.S3_BUCKET,
      Key: filename
    }).promise()
  }

  static async deleteAllFilesFromS3() {
    const bucket = process.env.S3_BUCKET
    const { Contents } = 
      await this.S3.listObjects({ 
        Bucket: process.env.S3_BUCKET 
      }).promise()
    
    if (Contents.length > 0) {
      await this.S3.deleteObjects({
        Bucket: bucket,
        Delete: {
          Objects: Contents.map(({ Key }) => ({ Key }))
        }
      }).promise()
    }
  }
}
