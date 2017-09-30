
import { Cmp5092Component } from './cmp';
describe('Cmp5092Component', () => {
  it('should add', () => {
    expect(new Cmp5092Component().add5092(1)).toBe(5093);
  });
});