
import { Cmp6883Component } from './cmp';
describe('Cmp6883Component', () => {
  it('should add', () => {
    expect(new Cmp6883Component().add6883(1)).toBe(6884);
  });
});