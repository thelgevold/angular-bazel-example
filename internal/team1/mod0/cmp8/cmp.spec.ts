
import { Cmp8108Component } from './cmp';
describe('Cmp8108Component', () => {
  it('should add', () => {
    expect(new Cmp8108Component().add8108(1)).toBe(8109);
  });
});