
import { Cmp6273Component } from './cmp';
describe('Cmp6273Component', () => {
  it('should add', () => {
    expect(new Cmp6273Component().add6273(1)).toBe(6274);
  });
});