
import { Cmp6940Component } from './cmp';
describe('Cmp6940Component', () => {
  it('should add', () => {
    expect(new Cmp6940Component().add6940(1)).toBe(6941);
  });
});