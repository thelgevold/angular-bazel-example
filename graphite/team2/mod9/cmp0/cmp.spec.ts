
import { Cmp6290Component } from './cmp';
describe('Cmp6290Component', () => {
  it('should add', () => {
    expect(new Cmp6290Component().add6290(1)).toBe(6291);
  });
});