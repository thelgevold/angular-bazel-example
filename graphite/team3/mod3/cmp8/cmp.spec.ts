
import { Cmp6338Component } from './cmp';
describe('Cmp6338Component', () => {
  it('should add', () => {
    expect(new Cmp6338Component().add6338(1)).toBe(6339);
  });
});