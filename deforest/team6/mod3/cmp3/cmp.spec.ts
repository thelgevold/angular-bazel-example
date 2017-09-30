
import { Cmp3633Component } from './cmp';
describe('Cmp3633Component', () => {
  it('should add', () => {
    expect(new Cmp3633Component().add3633(1)).toBe(3634);
  });
});