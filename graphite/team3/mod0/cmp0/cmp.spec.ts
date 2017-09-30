
import { Cmp6300Component } from './cmp';
describe('Cmp6300Component', () => {
  it('should add', () => {
    expect(new Cmp6300Component().add6300(1)).toBe(6301);
  });
});