
import { Cmp5063Component } from './cmp';
describe('Cmp5063Component', () => {
  it('should add', () => {
    expect(new Cmp5063Component().add5063(1)).toBe(5064);
  });
});