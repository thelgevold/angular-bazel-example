
import { Cmp6609Component } from './cmp';
describe('Cmp6609Component', () => {
  it('should add', () => {
    expect(new Cmp6609Component().add6609(1)).toBe(6610);
  });
});