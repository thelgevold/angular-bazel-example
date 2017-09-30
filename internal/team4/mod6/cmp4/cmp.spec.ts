
import { Cmp8464Component } from './cmp';
describe('Cmp8464Component', () => {
  it('should add', () => {
    expect(new Cmp8464Component().add8464(1)).toBe(8465);
  });
});