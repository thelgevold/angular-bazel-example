
import { Cmp5601Component } from './cmp';
describe('Cmp5601Component', () => {
  it('should add', () => {
    expect(new Cmp5601Component().add5601(1)).toBe(5602);
  });
});