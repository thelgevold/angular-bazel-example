
import { Cmp5881Component } from './cmp';
describe('Cmp5881Component', () => {
  it('should add', () => {
    expect(new Cmp5881Component().add5881(1)).toBe(5882);
  });
});