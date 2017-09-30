
import { Cmp6089Component } from './cmp';
describe('Cmp6089Component', () => {
  it('should add', () => {
    expect(new Cmp6089Component().add6089(1)).toBe(6090);
  });
});