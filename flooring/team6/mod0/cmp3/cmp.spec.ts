
import { Cmp5603Component } from './cmp';
describe('Cmp5603Component', () => {
  it('should add', () => {
    expect(new Cmp5603Component().add5603(1)).toBe(5604);
  });
});