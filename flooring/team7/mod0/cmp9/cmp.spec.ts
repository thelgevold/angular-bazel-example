
import { Cmp5709Component } from './cmp';
describe('Cmp5709Component', () => {
  it('should add', () => {
    expect(new Cmp5709Component().add5709(1)).toBe(5710);
  });
});