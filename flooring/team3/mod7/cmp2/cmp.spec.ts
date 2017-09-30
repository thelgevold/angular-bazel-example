
import { Cmp5372Component } from './cmp';
describe('Cmp5372Component', () => {
  it('should add', () => {
    expect(new Cmp5372Component().add5372(1)).toBe(5373);
  });
});