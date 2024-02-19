import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: 'AKIATCKAOVMZEGH36A4M',
  secretAccessKey: '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',
});

export async function uploadImage(file) {
  const key = `${Date.now()}-${parseInt(Math.random() * 100)}`;

  const params = {
    Bucket: 'teammates3bucket',
    Key: key,
    Body: file,
    ContentType: 'image/jpeg',
  };

  return new Promise((resolve, reject) => {
    s3.putObject(params, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(key); // 성공 시, 키 반환
      }
    });
  });
}

export async function downloadImage(filename) {
  const params = {
    Bucket: 'teammates3bucket',
    Key: filename,
  };
  //console.log('typeof_params_key', typeof params.Key);
  return new Promise((resolve, reject) => {
    s3.getObject(params, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
