
import { Cmp6106Component } from './cmp';
describe('Cmp6106Component', () => {
  it('should add', () => {
    expect(new Cmp6106Component().add6106(1)).toBe(6107);
  });
});