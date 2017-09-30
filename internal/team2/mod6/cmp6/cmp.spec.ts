
import { Cmp8266Component } from './cmp';
describe('Cmp8266Component', () => {
  it('should add', () => {
    expect(new Cmp8266Component().add8266(1)).toBe(8267);
  });
});