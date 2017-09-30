
import { Cmp3825Component } from './cmp';
describe('Cmp3825Component', () => {
  it('should add', () => {
    expect(new Cmp3825Component().add3825(1)).toBe(3826);
  });
});