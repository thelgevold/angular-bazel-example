
import { Cmp5001Component } from './cmp';
describe('Cmp5001Component', () => {
  it('should add', () => {
    expect(new Cmp5001Component().add5001(1)).toBe(5002);
  });
});