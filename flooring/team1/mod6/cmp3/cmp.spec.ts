
import { Cmp5163Component } from './cmp';
describe('Cmp5163Component', () => {
  it('should add', () => {
    expect(new Cmp5163Component().add5163(1)).toBe(5164);
  });
});