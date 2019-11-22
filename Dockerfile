# 加载基础镜像
FROM mhart/alpine-node
 
# 作者
MAINTAINER = "zhnan <zhn68033@163.com>"

# 创建工作目录
RUN rm -rf /app
RUN mkdir /app
WORKDIR /app

# 安装项目依赖
COPY . /app
RUN npm install


# 对外暴露端口
EXPOSE 7001
 
CMD ["npm", "start"]
