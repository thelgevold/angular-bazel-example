
import { Cmp9611Component } from './cmp';
describe('Cmp9611Component', () => {
  it('should add', () => {
    expect(new Cmp9611Component().add9611(1)).toBe(9612);
  });
});