
import { Cmp3712Component } from './cmp';
describe('Cmp3712Component', () => {
  it('should add', () => {
    expect(new Cmp3712Component().add3712(1)).toBe(3713);
  });
});