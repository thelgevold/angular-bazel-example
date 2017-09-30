
import { Cmp7298Component } from './cmp';
describe('Cmp7298Component', () => {
  it('should add', () => {
    expect(new Cmp7298Component().add7298(1)).toBe(7299);
  });
});