
import { Cmp9640Component } from './cmp';
describe('Cmp9640Component', () => {
  it('should add', () => {
    expect(new Cmp9640Component().add9640(1)).toBe(9641);
  });
});