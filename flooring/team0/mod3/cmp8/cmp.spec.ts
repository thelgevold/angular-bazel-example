
import { Cmp5038Component } from './cmp';
describe('Cmp5038Component', () => {
  it('should add', () => {
    expect(new Cmp5038Component().add5038(1)).toBe(5039);
  });
});