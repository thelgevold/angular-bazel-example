
import { Cmp5354Component } from './cmp';
describe('Cmp5354Component', () => {
  it('should add', () => {
    expect(new Cmp5354Component().add5354(1)).toBe(5355);
  });
});