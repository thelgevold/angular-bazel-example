
import { Cmp5105Component } from './cmp';
describe('Cmp5105Component', () => {
  it('should add', () => {
    expect(new Cmp5105Component().add5105(1)).toBe(5106);
  });
});