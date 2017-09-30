
import { Cmp4096Component } from './cmp';
describe('Cmp4096Component', () => {
  it('should add', () => {
    expect(new Cmp4096Component().add4096(1)).toBe(4097);
  });
});