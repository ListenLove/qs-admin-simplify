<script setup lang="ts">
import { removeToken } from '~/src/utils'

const { replace } = useRouter()
</script>

<template>
  <AppPage>
    <n-result m-auto status="404" description="抱歉，您访问的页面不存在。">
      <template #icon>
        <img src="@/assets/images/404.webp" width="500">
      </template>
      <template #footer>
        <div f-c-c>
          <n-space>
            <n-button @click="replace('/')">
              返回首页
            </n-button>
            <n-button
              type="primary"
              @click="() => {
                removeToken()
                replace('/login')
              }"
            >
              返回登录
            </n-button>
          </n-space>
        </div>
      </template>
    </n-result>
  </AppPage>
</template>
