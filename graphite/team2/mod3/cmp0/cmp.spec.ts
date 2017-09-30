
import { Cmp6230Component } from './cmp';
describe('Cmp6230Component', () => {
  it('should add', () => {
    expect(new Cmp6230Component().add6230(1)).toBe(6231);
  });
});