# 加载基础镜像
FROM mhart/alpine-node
 
# 作者
MAINTAINER = "zhnan <zhn68033@163.com>"

# 创建工作目录
RUN rm -rf /app
RUN mkdir /app
WORKDIR /app

# 将项目拷贝到工作目录中
COPY . /app


# 对外暴露端口
EXPOSE 7001
 
CMD ["npm", "start"]
