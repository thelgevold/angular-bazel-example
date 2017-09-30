
import { Cmp5310Component } from './cmp';
describe('Cmp5310Component', () => {
  it('should add', () => {
    expect(new Cmp5310Component().add5310(1)).toBe(5311);
  });
});