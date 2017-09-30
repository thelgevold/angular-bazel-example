
import { Cmp6687Component } from './cmp';
describe('Cmp6687Component', () => {
  it('should add', () => {
    expect(new Cmp6687Component().add6687(1)).toBe(6688);
  });
});