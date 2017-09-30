
import { Cmp5321Component } from './cmp';
describe('Cmp5321Component', () => {
  it('should add', () => {
    expect(new Cmp5321Component().add5321(1)).toBe(5322);
  });
});