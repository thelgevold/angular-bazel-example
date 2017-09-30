
import { Cmp5611Component } from './cmp';
describe('Cmp5611Component', () => {
  it('should add', () => {
    expect(new Cmp5611Component().add5611(1)).toBe(5612);
  });
});