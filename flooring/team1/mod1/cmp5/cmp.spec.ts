
import { Cmp5115Component } from './cmp';
describe('Cmp5115Component', () => {
  it('should add', () => {
    expect(new Cmp5115Component().add5115(1)).toBe(5116);
  });
});