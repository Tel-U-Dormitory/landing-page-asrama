// Satu sumber yang gagal tidak boleh merusak seluruh beranda.
export async function safeLoad<T>(read: () => Promise<readonly T[]>): Promise<{ items: readonly T[]; failed: boolean }> {
  try {
    return { items: await read(), failed: false };
  } catch (error) {
    console.error("[beranda] sumber konten gagal dimuat", error);
    return { items: [], failed: true };
  }
}
