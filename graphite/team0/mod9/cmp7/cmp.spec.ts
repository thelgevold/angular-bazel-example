
import { Cmp6097Component } from './cmp';
describe('Cmp6097Component', () => {
  it('should add', () => {
    expect(new Cmp6097Component().add6097(1)).toBe(6098);
  });
});