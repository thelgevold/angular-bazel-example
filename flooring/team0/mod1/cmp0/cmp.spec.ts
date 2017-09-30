
import { Cmp5010Component } from './cmp';
describe('Cmp5010Component', () => {
  it('should add', () => {
    expect(new Cmp5010Component().add5010(1)).toBe(5011);
  });
});