
import { Cmp6327Component } from './cmp';
describe('Cmp6327Component', () => {
  it('should add', () => {
    expect(new Cmp6327Component().add6327(1)).toBe(6328);
  });
});