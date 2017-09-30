
import { Cmp7600Component } from './cmp';
describe('Cmp7600Component', () => {
  it('should add', () => {
    expect(new Cmp7600Component().add7600(1)).toBe(7601);
  });
});