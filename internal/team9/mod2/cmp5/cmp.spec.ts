
import { Cmp8925Component } from './cmp';
describe('Cmp8925Component', () => {
  it('should add', () => {
    expect(new Cmp8925Component().add8925(1)).toBe(8926);
  });
});