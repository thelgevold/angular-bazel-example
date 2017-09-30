
import { Cmp5124Component } from './cmp';
describe('Cmp5124Component', () => {
  it('should add', () => {
    expect(new Cmp5124Component().add5124(1)).toBe(5125);
  });
});