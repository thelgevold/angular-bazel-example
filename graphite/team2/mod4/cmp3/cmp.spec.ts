
import { Cmp6243Component } from './cmp';
describe('Cmp6243Component', () => {
  it('should add', () => {
    expect(new Cmp6243Component().add6243(1)).toBe(6244);
  });
});