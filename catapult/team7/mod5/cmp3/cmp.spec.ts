
import { Cmp2753Component } from './cmp';
describe('Cmp2753Component', () => {
  it('should add', () => {
    expect(new Cmp2753Component().add2753(1)).toBe(2754);
  });
});