
import { Cmp5083Component } from './cmp';
describe('Cmp5083Component', () => {
  it('should add', () => {
    expect(new Cmp5083Component().add5083(1)).toBe(5084);
  });
});