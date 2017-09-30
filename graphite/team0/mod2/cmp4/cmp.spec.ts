
import { Cmp6024Component } from './cmp';
describe('Cmp6024Component', () => {
  it('should add', () => {
    expect(new Cmp6024Component().add6024(1)).toBe(6025);
  });
});